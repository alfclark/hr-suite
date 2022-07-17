<template>
  <section class="user">
    <div class="back">
      <router-link class="backBtn" to="/">Atras</router-link>
    </div>
    <div class="img">
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="info">
      <h4>José Robles</h4>
      <h6>10/02/2022</h6>
    </div>
    <div class="skills">
      <h5>Habilidades:</h5>
      <form @submit.prevent="" class="skillsList">
        <input type="checkbox" class="skill" name="java" />
        <label for="java">Java</label><br />
        <input type="checkbox" class="skill" name="microservices" />
        <label for="microservices">Microservices</label><br />
        <input type="checkbox" class="skill" name="elastic" />
        <label for="elastic">NodeJS</label><br />
        <div class="actions">
          <button class="save">Guardar</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
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
</style>
