<template>
    <div>
         <img alt="Vue logo" src="../assets/Logo2.jpg">
       <h1>Stock</h1>
            <hr>
        <table>
            <h2>Cantidades:</h2>
            <tr>
                <th>Pasteles</th>
                <th>Pixelarts</th>
            </tr>
            <tr>
                <td>Chocolate: <input type="number"></td>
                <td>Mario's Pixelart: <input type="number"></td>
            </tr>

            <tr>
                <td>Vainilla: <input type="number"></td>
                <td>Luiguis's Pixelart: <input type="number"></td>
            </tr>

            <tr>
                <td>Combinado: <input type="number"></td>
                <td>Joshy's Pixelar: <input type="number"></td>
            </tr>
            
        </table>
        <hr>
    </div>
</template>

<script>
export default {
  name: 'almacen', 
}
</script>