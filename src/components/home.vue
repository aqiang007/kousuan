<template>
  <div class="HomeWrapper">
    <div v-show="bShowForm" class="formWrapper">
      口算题生成器(每页15题)<br />
      除法：<input v-model="divisionSize" />题: 被除数位数：<input
        v-model="dividendSize"
      />
      除数位数：<input v-model="divisorSize" /><br />
      乘法：<input v-model="multiplication" />题: 被乘数位数：<input
        v-model="multiplicandSize"
      />
      乘数位数：<input v-model="multiplierSize" /><br />

      份数：<input v-model="daySize" />
      <button @click="_initEx">&nbsp;生 成&nbsp;</button>
    </div>
    <div
      class="btnShowForm"
      v-show="!bShowForm"
      @click="bShowForm = !bShowForm"
    >
      ︾
    </div>
    <div>
      <p v-for="(item, index) in datas" :key="index">{{ item }}</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "Home",
  props: [],
  data() {
    return {
      debug: true,
      daySize: 10,
      itemIndex: 1,
      bShowForm: true,
      divisionSize: 8,
      dividendSize: 3,
      divisorSize: 1,
      multiplication: 7,
      multiplicandSize: 2,
      multiplierSize: 2,
      datas: []
    };
  },
  mounted() {},
  updated() {},
  methods: {
    // region inner

    // region _initEx
    _initEx() {
      this.datas = [];
      for (let i = 0; i < this.daySize; i++) {
        this.generate();
      }
    },
    generate() {
      this.itemIndex = 0;
      for (let i = 0; i < this.divisionSize; i++) {
        this.itemIndex++;
        let n1 = this.generateNumber(1);
        while (n1 < 3) {
          n1 = this.generateNumber(1);
        }
        let n2 = this.generateNumber(this.dividendSize);
        if (i % 2 === 1) {
          while (n2 % n1 !== 0) {
            n2 = this.generateNumber(this.dividendSize);
          }
        }
        this.datas.push(`(${this.itemIndex}) ${n2}÷${n1}=`);
      }
      for (let i = 0; i < this.multiplication; i++) {
        this.itemIndex++;
        this.datas.push(
          `(${this.itemIndex}) ${this.generateNumber(
            this.multiplicandSize
          )}×${this.generateNumber(this.multiplierSize)}=`
        );
      }
      this.bShowForm = false;
    },
    generateNumber(size) {
      return String(Math.floor(Math.random() * Math.pow(10, size + 1))).substr(
        0,
        size
      );
    }
    // endregion _initEx
  }
};
</script>
<style scoped lang="less">
.HomeWrapper {
  height: 100%;
  // background: url(../assets/images/bg.jpg);
  .formWrapper {
    border: 1px solid #cccccc;
    padding: 5px;
    margin: 10px;
  }
  background-size: contain;
  p {
    display: inline-block;
    width: 33%;
    margin-bottom: 190px;
  }
  .btnShowForm {
    display: table;
    width: 30px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    right: 10px;
    top: -5px;
    cursor: pointer;
  }
}
</style>
