<template>
  <section class="user">
    <div class="back">
      <router-link class="backBtn" to="/">Back</router-link>
    </div>
    <div class="img">
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="info">
      <h4>{{ candidate.name }}</h4>
      <h6>Date of Interview: {{ candidate.date }}</h6>
    </div>
    <div class="skills">
      <h5>Skills:</h5>
      <form @submit.prevent="" class="skillsList">
        <input v-model="java" type="checkbox" class="skill" id="java" />
        <label for="java">Java</label><br />
        <input
          v-model="microservices"
          type="checkbox"
          class="skill"
          id="microservices"
        />
        <label for="microservices">Microservices</label><br />
        <input v-model="nodejs" type="checkbox" class="skill" id="nodejs" />
        <label for="nodejs">NodeJS</label><br />
        <div class="actions">
          <button :class="{ saved: saved }" @click="saveSkills" class="save">
            Save
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { db } from "@/firebase/db";
import { onUnmounted, ref } from "@vue/runtime-core";
import router from "@/router";

export default {
  setup() {
    const route = useRoute();
    const candidateID = route.params.id;
    const candidateCollection = db.collection("candidates");
    const candidate = ref({});

    const java = ref(null);
    const microservices = ref(null);
    const nodejs = ref(null);

    /* FUNCION GATHER CANDIDATE INFO */
    const getCandidate = candidateCollection
      .doc(candidateID)
      .get()
      .then((doc) => {
        if (doc.exists) {
          /* console.log(doc.data()); */
          candidate.value = doc.data();
          java.value = doc.data().java;
          microservices.value = doc.data().microservices;
          nodejs.value = doc.data().nodejs;
        } else {
          console.log("Candidate not found");
        }
      });
    onUnmounted(getCandidate);

    /* FUNCION ACTUALIZAR SKILLS */
    function saveSkills() {
      candidateCollection
        .doc(candidateID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            doc.ref
              .update({
                microservices: microservices.value,
                java: java.value,
                nodejs: nodejs.value,
              })
              .then(() => {
                alert("Saved!");
                router.push("/");
              });
          } else {
            console.log("Candidate not found");
          }
        });
    }

    return {
      candidateID,
      candidateCollection,
      candidate,
      java,
      microservices,
      nodejs,
      saved: false,
      saveSkills,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
}
.back {
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: left;
}
.backBtn {
  margin: 1rem 2rem;
  background-color: var(--lightBlue);
  padding: 0.2rem 1rem;
  text-decoration: none;
  color: var(--carbon);
  transition: 0.4s;
}
.backBtn:hover {
  box-shadow: 0 0 5px #00000040;
  background-color: var(--grey);
}
.img {
  margin-bottom: 1rem;
}
.fa-solid {
  background-color: var(--lightBlue);
  padding: 3rem;
  font-size: 4rem;
  border-radius: 50%;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.skills {
  margin: 1rem 0;
}
label {
  padding-left: 0.5rem;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
}
.save {
  border: none;
  border-radius: 2rem;
  padding: 0.3rem 1rem;
  background-color: var(--blue);
  transition: 0.4s;
}

.save:hover {
  box-shadow: 0 0 5px #00000040;
  background-color: var(--grey);
}

.saved {
  background-color: green;
}
</style>
