<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">User List</p>
        <p class="fst-italic">
          “Tente de novo. Fracasse de novo. Mas fracasse melhor”. (Samuel
          Beckett)
        </p>
      </div>
    </div>
  </div>

  <div class="container" v-if="loading">
    <div class="row">
      <div class="col">
        <Spinner />
      </div>
    </div>
  </div>

  <div class="container" v-if="!loading && errorMessage">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>

  <div v-if="!loading && users.length > 0" class="container">
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Website</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "../Spinner.vue";

export default {
  name: "VuexUserList",
  components: { Spinner },
  data: function () {
    return {
      loading: false,
      users: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;

      let dataURL = `https://jsonplaceholder.typicode.com/users`;
      let response = await axios.get(dataURL);

      this.users = response.data;
      this.loading = false;
      // console.log(response.data);
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  },
};
</script>

<style>
</style>