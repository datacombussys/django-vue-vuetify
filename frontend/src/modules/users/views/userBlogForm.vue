<template>
  <div class="reset-this">
    <div class="new-blog-form">
      <b-form v-if="show">
        <b-form-group
          id="input-group-1"
          label="Auhor:"
          label-for="input-1"
          description="Please enter an author ID#."
        >
          <b-form-input
            id="input-1"
            v-model="form.author"
            type="number"
            required
            placeholder="Enter Author ID"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Blog Title:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.title" required placeholder="Enter Blog Title"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Blog Content:" label-for="input-3">
          <b-form-textarea class="custom-control" id="input-3" rows="10" max-rows="20" v-model="form.content" required></b-form-textarea>
        </b-form-group>

        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <b-form-group
          id="input-group-4"
          label="Slug:"
          label-for="input-4"
          description="Please enter a Slug."
        >
          <b-form-input
            id="input-1"
            v-model="form.slug"
            type="text"
            placeholder="Enter Proper Slug"
          ></b-form-input>
        </b-form-group>

        <br />
        <p>
          <a-date-picker showTime placeholder="Select Time" @change="onChange" @ok="onOk" />
        </p>

        <br />

        <b-button type="submit" @click="onSubmit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    <div>
        <sampleData-view></sampleData-view>
    </div>
    </div>
  </div>
</template>

<script>
import SampleData from "../../../modules/users/views/sample-content.vue";

export default {
  data() {
    return {
      form: {
        author: 1,
        title: "",
        content: "",
        slug: "",
        last_updated: null,
        datestring: "",
        value2: ""
      },
      show: true,
      file: null      
      
    };
  },
  methods: {
    onSubmit(evt) {
    evt.preventDefault()
     this.$http.post('http://127.0.0.1:8000/api/blog/',{
         author: this.form.author,
         title: this.form.title,
         slug: this.form.slug,
         content: this.form.content
     })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    },

    onChange(date, dateString) {
        this.form.date = date;
        this.form.datestring = dateString;
      console.log('onChange: ', date, dateString);
    },

    onOk(value) {
      this.form.last_updated = value;
      console.log('onOk: ', value);
    },
  },
 components: {
     "sampleData-view": SampleData,
 },
};
</script>

<style lang="scss">
@import "../../../assets/scss/main.scss";
</style>