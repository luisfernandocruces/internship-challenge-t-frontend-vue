<template>
  <div>
    <b-overlay :show="show" rounded="sm">
      <br />
      <b-row>
        <b-col>
          <h5>
            <b-link to="/">Come back</b-link>
          </h5>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col sm="3">
          <label for="input-large">
            <h2>
              Write domain:
            </h2>
          </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="input-large"
            type="text"
            size="lg"
            placeholder="Sample: google.com"
            v-model="domain"
          ></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row align-h="end">
        <b-col cols="2">
          <b-button
            variant="success"
            size="lg"
            @click="checkDomain"
            :disabled="disableButton"
            >Check</b-button
          >
        </b-col>
      </b-row>
      <br />
      <hr />
      <!-- Information of checked domain-->
      <div v-if="showData">
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>
                Title of page:
              </h4>
            </label>
          </b-col>
          <b-col sm="9">
            <label for="input-large">
              <p>{{ title }}</p>
            </label>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>
                Logo of page:
              </h4>
            </label>
          </b-col>
          <b-col sm="9">
            <label for="input-large">
              <p>
                {{ logo }}
              </p>
            </label>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>
                Server is down:
              </h4>
            </label>
          </b-col>
          <b-col sm="9">
            <label for="input-large">
              <p>
                {{ isDown }}
              </p>
            </label>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>
                Smallest SSL grade:
              </h4>
            </label>
          </b-col>
          <b-col sm="9">
            <label for="input-large">
              <p>
                {{ sslGrade }}
              </p>
            </label>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>
                Previous smallest SSL grade:
              </h4>
            </label>
          </b-col>
          <b-col sm="9">
            <label for="input-large">
              <p>
                {{ previousSSLGrade }}
              </p>
            </label>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>
                Servers have changed:
              </h4>
            </label>
          </b-col>
          <b-col sm="9">
            <label for="input-large">
              <p>
                {{ serversChange }}
              </p>
            </label>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>
                Servers have changed:
              </h4>
            </label>
          </b-col>
          <b-col sm="9">
            <label for="input-large">
              <p>
                {{ serversChange }}
              </p>
            </label>
          </b-col>
        </b-row>

        <br />
        <b-row>
          <b-col sm="3">
            <label for="input-large">
              <h4>Associated servers ({{ servers.length }}) :</h4>
            </label>
          </b-col>
          <b-col sm="9">
            <div v-for="serve in servers" :key="serve.id">
              <b-row>
                <b-col sm="3">
                  <h4>
                    Address:
                  </h4>
                </b-col>
                <b-col sm="9">
                  <p>
                    {{ serve.Address }}
                  </p>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="3">
                  <h4>
                    Country:
                  </h4>
                </b-col>
                <b-col sm="9">
                  <p>
                    {{ serve.Country }}
                  </p>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="3">
                  <h4>
                    Owner:
                  </h4>
                </b-col>
                <b-col sm="9">
                  <p>
                    {{ serve.Owner }}
                  </p>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="3">
                  <h4>
                    SSL grade:
                  </h4>
                </b-col>
                <b-col sm="9">
                  <p>
                    {{ serve.SSLGrade }}
                  </p>
                </b-col>
              </b-row>
              <hr />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-overlay>

    <b-modal ref="my-modal" :title="messageTitleModal" hide-footer>
      <p class="my-4">{{ messageModal }}</p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CheckDomain",
  data() {
    return {
      domain: "",
      show: false,
      showData: false,
      title: "",
      logo: "",
      isDown: "",
      sslGrade: "",
      previousSSLGrade: "",
      serversChange: "",
      servers: [],
      messageTitleModal: "",
      messageModal: "",
    };
  },
  computed: {
    disableButton() {
      if (!this.domain) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    async checkDomain() {
      console.log(this.domain.trim());
      if (this.domain.trim() != "") {
        this.show = true;
        await axios
          .post("http://localhost:8082/checkDomain/" + this.domain)
          .then((response) => {
            console.log(response.data);
            this.show = false;
            this.title = response.data.Title;
            this.logo = response.data.Logo;
            this.isDown = response.data.IsDown;
            this.previousSSLGrade = response.data.PreviousSSLGrade;
            this.serversChange = response.data.ServersChange;
            this.sslGrade = response.data.SSLGrade;
            this.servers = response.data.Servers;
            this.showData = true;
          })
          .catch((error) => {
            console.log(error.response);
            this.show = false;
            this.messageTitleModal = "Error";
            this.messageModal = error.response.data;
            this.showModal();
          });
      } else {
        console.log("there");
      }
    },
  },
};
</script>

<style>
p {
  font-size: 20px;
}
</style>
