<template>
    <div>
        <hr>
        
        <h2>Pasteles 3 leches</h2>
        <table class="Forma" >
            <tr>
                <th><img src="../assets/Chocolate.png" ></th>
                <th><img src="../assets/Vainilla.png" ></th>
                <th><img src="../assets/Conbinado.jpg" ></th>
                
            </tr>
            <tr>
                <th><p>Pastel de Chocolate</p></th>
                <th><p>Pastel de Vainilla</p></th>
                <th><p>Pastel de Combinado</p></th>
            </tr>
              
        </table>

        <p class="enf">Nuestros pasteles de tres leches se venden en tres diferentes tama♥os; chico (S), mediano (M) y grande (L):</p>
        <p>Chico ♥..................{{$store.state.chico}} Pixelpesos</p>
        <p>Mediano ♥♥...........{{$store.state.mediano}} Pixelpesos</p>
        <p>Grande ♥♥♥...........{{$store.state.grande}} Pixelpesos</p>
        <hr>
    </div>
</template>

<script>
export default {
  name: 'sabores', 
}
</script>