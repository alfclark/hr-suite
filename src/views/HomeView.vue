<template>
  <section class="Home">
    <h2 class="title">Manejo de Candidatos</h2>
    <!-- Seccion input añadir un candidato -->
    <div class="addSection">
      <h4 class="addTitle">Añadir Candidato y Fecha de Entrevista</h4>
      <form class="inputSection" @submit.prevent="addNewCandidate">
        <input
          v-model="newCandidate.name"
          placeholder="Nombre del candidato"
          autocomplete="off"
          class="nameInput"
          required
        />
        <input
          class="dateInput"
          type="date"
          v-model="newCandidate.date"
          required
        />
        <button type="submit" class="addCandidate">
          <i class="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
    <!-- Seccion Lista candidatos -->
    <div class="candidatesList">
      <h4>Lista de Candidatos</h4>
      <ul class="candidates">
        <li
          class="candidate"
          v-for="{ id, name, date } in candidates"
          :key="id"
        >
          <div class="candidateInfo">
            <div class="candidateImg">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="infoSection name">
              <h6 class="subtitle">Nombre</h6>
              <h4 class="sectionValue">{{ name }}</h4>
            </div>
            <div class="infoSection">
              <h6 class="subtitle">Fecha Entrevista</h6>
              <h5 class="sectionValue">{{ date }}</h5>
            </div>
            <div class="infoSection actions">
              <router-link class="details" :to="'/candidate/' + id">
                Detalles
              </router-link>
              <button @click="deleteCandidate(id)" class="deleteCandidate">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { onUnmounted, ref, reactive } from "vue";
import { db } from "@/firebase/db";

export default {
  setup() {
    const candidates = ref([]);
    const newCandidate = reactive({
      reg: null,
      name: "",
      date: "",
      java: false,
      microservices: false,
      nodejs: false,
    });
    const candidateCollection = db.collection("candidates");

    /* FUNCION AÑADIR UN CANDIDATO A LA DB */
    function addNewCandidate() {
      candidateCollection.add({
        ...newCandidate,
        reg: Date.now(),
      });
      newCandidate.name = "";
      newCandidate.date = "";
    }

    /* FUNCION RETRIEVE DB */
    const getDatabase = candidateCollection
      .orderBy("reg", "desc")
      .onSnapshot((snapshot) => {
        /* console.log(snapshot.docs); */
        candidates.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });

    /* FUNCION ELIMINAR CANDIDATO */
    function deleteCandidate(candidateID) {
      candidateCollection
        .doc(candidateID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            doc.ref
              .delete()
              .then(() => {
                console.log("Candidato eliminado");
              })
              .catch((error) => {
                console.log("No se pudo eliminar: ", error);
              });
          } else {
            console.log("Candidate no encontrado!");
          }
        })
        .catch((error) => {
          console.log("Candidato no existe!", error);
        });
    }

    /* EJECUCION DE LA FUNCION TOMAR DB */
    onUnmounted(getDatabase);

    return {
      newCandidate,
      candidates,
      candidateCollection,
      addNewCandidate,
      deleteCandidate,
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
.title {
  margin: 1rem 0;
}
/* Seccion añadir candidato */
.addSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inputSection {
  background-color: var(--lightBlue);
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
}
input {
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  appearance: none;
  outline: none;
}
.nameInput {
  padding: 0 0 0 1rem;
}
.dateInput {
  padding: 0 1rem;
  color: var(--carbon);
}
.addCandidate {
  background-color: transparent;
  border: none;
  padding: 1rem;
  transition: 0.4s;
}
.addCandidate:hover {
  background-color: var(--green);
}

/* Seccion lista de candidatos */
.candidatesList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.candidates {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 0;
}
.candidate {
  list-style: none;
  box-shadow: 0 0 5px #00000040;
  width: 537px;
}

.candidateInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.candidateImg {
  padding: 1rem;
}
.subtitle {
  margin: 0;
  color: grey;
  font-size: 0.7rem;
}
.infoSection {
  margin: 0 1rem 0 0;
}
.name {
  width: 200px;
}
.sectionValue {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  font-size: 1.2rem;
  text-transform: capitalize;
}
.actions {
  display: flex;
  gap: 1rem;
  margin: 0 0 0 1rem;
  align-items: center;
}
.details {
  text-decoration: none;
  background-color: var(--green);
  color: var(--carbon);
  padding: 0.3rem 0.7rem;
  transition: 0.4s;
  font-weight: 500;
}
.details:hover {
  background-color: var(--grey);
}
.deleteCandidate {
  border: none;
  padding: 1rem;
  transition: 0.4s;
}

.deleteCandidate:hover {
  background-color: var(--red);
}

@media screen and (max-width: 600px) {
  h4 {
    font-size: 90%;
  }
  .inputSection {
    width: 90vw;
  }
  .nameInput {
    font-size: 0.8rem;
  }
  .dateInput {
    padding: 0;
    font-size: 0.8rem;
  }
  .candidate {
    width: 95vw;
  }
  .subtitle {
    font-size: 0.5rem;
  }
  .sectionValue {
    font-size: 0.8rem;
  }
  .details {
    font-size: 0.8rem;
  }
}
</style>
