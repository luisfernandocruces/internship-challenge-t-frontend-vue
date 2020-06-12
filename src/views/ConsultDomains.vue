<template>
  <div>
    <br />
    <b-row>
      <b-col>
        <h5>
          <b-link to="/">Come back</b-link>
        </h5>
      </b-col>
    </b-row>

    <b-row>
      <div>
        <b-table sticky-header :items="items" head-variant="light"></b-table>
      </div>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ConsultDomains",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.chargeDomains();
  },
  methods: {
    async chargeDomains() {
      await axios
        .get("http://localhost:8082/consultDomains")
        .then((response) => {
          console.log(response.data);
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
