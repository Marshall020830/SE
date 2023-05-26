<template>
  <div>
    <h1>{{stationid}}</h1>
  </div>
</template>

<script>
export default {
    name:'report',
    data(){
        return {
            "stationid":""
        }
    },
    methods:{
        getParams(){
            this.stationid = this.$route.query.stationid
            console.log(this.stationid)
        }
    },
    created(){
        console.log("创建了")
        this.stationid = this.$route.query.stationid
        this.getParams()
    },
    activated(){
        console.log("创建了")
        this.stationid = this.$route.query.stationid
        this.getParams()
    },
    beforeDestroy(){
        console.log("我被删除了")
    }
}
</script>

<style>

</style>