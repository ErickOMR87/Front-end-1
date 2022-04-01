<template>
    <div>
        <h2>Pixel design</h2>
        <p class="enf">Tenemos tres diferentes Pixelarts a ofrecerte:</p>
        <table class="Forma" >
            <tr>
                <th><img src="../assets/Mario.jpg"></th>
                <th><img src="../assets/Luuigui.jpg"></th>
                <th><img src="../assets/Joshy.jpg"></th>
            </tr>
            <tr>
                <th><p>Mario's pix</p></th>
                <th><p>Luigui's pix</p></th>
                <th><p>Joshy's pix</p></th>
            </tr>
            <tr>
                <th><p>{{$store.state.adorno}} Pixelpesos</p></th>
                <th><p>{{$store.state.adorno}} Pixelpesos</p></th>
                <th><p>{{$store.state.adorno}} Pixelpesos</p></th>
            </tr>
              
        </table>
    
        <hr>
    </div>
</template>

<script>
export default {
  name: 'adornos', 
}
</script>