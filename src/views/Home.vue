<template>
  <div class="home">
    <br />
    <b-row class="justify-content-md-center">
      <b-col>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/id/1/400/400"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Check domain">
                <b-card-text>
                  Here, you can checkt status of server writting the domain
                </b-card-text>
                <br />
                <br />
                <b-button to="/checkDomain" variant="primary"
                  >Go to check domain</b-button
                >
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/id/119/400/400"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Queries">
                <b-card-text>
                  Here, you can consulting all registries of domain that has
                  been checked previosuly
                </b-card-text>
                <br />
                <b-button to="/consultingDomains" variant="primary"
                  >Go to consult</b-button
                >
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
        no-animation
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </b-row>
    <br />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
