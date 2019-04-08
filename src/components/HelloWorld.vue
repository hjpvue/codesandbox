<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Hello Vue in CodeSandbox!</p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3 class="Essential">Essential Links</h3>

    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
    <h4>AI</h4>
    <div class="testlong">It has been said that allergens is nothing more than a very long list of if statements in a program.
      Although this is an oversimplification, it serves as the simple analogy what artificial intelligence can bring to the table.. 
      Google's tensorflow adaptation of neural nets is an exception a powerful thought paradigm it allows us to include complicated 
      Business Management sessions into an automated system that can serve as a backup for when management becomes unsure of their decisions. 
      Not only are these systems useful for aiding management in their daily duties, be used to outsource the bulk of customer service needs. 
      Advanced and quirky chatbots the are tailored to your business structure and your client needs allow for greater customer satisfaction by 
      freeing up customer service staff time and ensuring immediate responsive customer service environment. The average neural net has about 100 inputs, 
      and these are digested down 10 outputs. A manager that has to be knowledgeable about 100 Dynamic processes, and ultimately make decisions that 
      affect less than 10 operations, it is easy to envision that greater managerial effectivity can be accomplished by implementing web-based 
      helper services.</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "/src/assets/css/space.css";
@import "/src/assets/css/master.css";
@import "/src/assets/css/spinner.css";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
