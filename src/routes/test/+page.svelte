<div class="textBox">
    <div>test box </div>
    <button on:click={goBack} style="width: 100px; height:50px">
        go back
    </button>
</div>


<script type="ts">
    import { route } from '../../global/index';
    
    const goBack=()=>{
        route.back();
    }

</script>

<style>
    .textBox{
        height: 500px;
        width:500px;
        background-color: antiquewhite;
        text-align: center;
        line-height: 100px;
    }
</style>