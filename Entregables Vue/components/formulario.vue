<template>
    <div>
       
        <h1>Orden</h1>
        <p class="centro">Falta poco para disfrutar, te ofrecemos tres diferentes sabores de pasteles y tres diferentes pixelarts, haz tus combinaciones ya!!</p>
        <p class="centro">Ingresa tus datos para el registro de tus ordenes</p>
        <hr>

        <h2>Registro</h2>
            <form action="Pedido.js">
                <p>Datos personales</p>
                <label for="Nombre">Ingresa tu nombre</label><br>
                <input type="text" name="Nombre" id="Nombre" placeholder="Nombre"><br>
                <label for="Apellidos">Ingresa tus Apellidos</label><br>
                <input type="text" name="Apellidos" id="Apellidos" placeholder="Apellidos"><br>
                <label for="Telefono">Ingresa tu telefono</label><br>
                <input type="tel" name="telefono" placeholder="Telefono" id="Telefono"><br>
                <label for="email">Ingresa tu e-mail</label><br>
                <input type="text" name="e-mail" id="e-mail" placeholder="e-mail"><br>
                <label for="mensaje">Ingresa tu mensaje</label><br>
                <input type="text" name="mensaje" id="mensaje" placeholder="max 20 caracteres" maxlength="20"><br>

                <hr>

                <h3>Pasteles</h3>
                <img src="../assets/Chocolate.png" alt="Logo2" width="100px"><br>
                <label for="text">Pastel 3 leches de Chocolate</label><br>
                <label>♥ (S) {{$store.state.chico}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Chocolate"></label><input type="Number" id="Chocolate" name="Cocolate" value="0"><br>
                <label>♥♥ (M) {{$store.state.mediano}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Chocolate"></label><input type="Number" id="Chocolate" name="Cocolate" value="0"><br>
                <label>♥♥♥ (L) {{$store.state.grande}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Chocolate"></label><input type="Number" id="Chocolate" name="Cocolate" value="0"><br>

                <img src="../assets/Vainilla.png" alt="Logo2" width="100px"><br>
                <label for="text">Pastel 3 leches de Vainilla</label><br>
                <label>♥ (S) {{$store.state.chico}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Vainilla"></label><input type="Number" id="Vainilla" name="Vainilla" value="0"><br>
                <label>♥♥ (M) {{$store.state.mediano}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Vainilla"></label><input type="Number" id="Vainilla" name="Vainilla" value="0"><br>
                <label>♥♥♥ (L) {{$store.state.grande}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Vainilla"></label><input type="Number" id="Vainilla" name="Vainilla" value="0"><br>

                <img src="../assets/Conbinado.jpg" alt="Logo2" width="120px"><br>
                <label for="text">Pastel 3 leches de Combinado</label><br>
                <label>♥ (S) {{$store.state.chico}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Combinado"></label><input type="number" id="Combinado" name="Combinado" value="0"><br>
                <label>♥♥ (M) {{$store.state.mediano}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Combinado"></label><input type="number" id="Combinado" name="Combinado" value="0"><br>
                <label>♥♥♥ (L) {{$store.state.grande}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Combinado"></label><input type="number" id="Combinado" name="Combinado" value="0"><br>

                <hr>

                <h3>Pixel design</h3>
                <img src="../assets/Mario.jpg" alt="Logo2" width="100px"><br>
                <label for="text">Mario's pix {{$store.state.adorno}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Chocolate"></label><input type="Number" id="Chocolate" name="Cocolate" value="0"><br>

                <img src="../assets/Luuigui.jpg" alt="Logo2" width="100px"><br>
                <label for="text">Luigui's pix {{$store.state.adorno}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Chocolate"></label><input type="Number" id="Chocolate" name="Cocolate" value="0"><br>

                <img src="../assets/Joshy.jpg" alt="Logo2" width="120px"><br>
                <label for="text">Joshy's pix {{$store.state.adorno}} Pixelpesos</label>
                <input type="checkbox">
                <label for="Chocolate"></label><input type="Number" id="Chocolate" name="Cocolate" value="0"><br>
       
                <hr>

                <h3>Paquetes</h3>
                <p>Todos los pasteles en paquetes son grandes ♥♥♥, elige el sabor y pixelart que gustes por tan solo {{$store.state.paqueteMario}} Pixelpesos!</p><br>
                
<table>
                    <tr>
                        <th>Sabor?</th>
                        <th>Pixelart?</th>
                    </tr>

                    <tr>
                        <td><input type="radio" name="Pastel" value="Choco" id="Choco">
                        <label for="C">Chocolate</label></td>
                        <td><input type="radio" name="Art" value="Mario" id="Mario">
                        <label for="C">Mario</label></td>
                    </tr>

                    <tr>
                        <td><input type="radio" name="Pastel" value="Vai" id="Vai">
                            <label for="V">Vainilla</label></td>
                        <td><input type="radio" name="Art" value="Luigui" id="Luigui">
                            <label for="V">Luigui</label></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="Pastel" value="Com" id="Com">
                            <label for="Co">Combinado</label><br></td>
                        <td><input type="radio" name="Art" value="Joshy" id="Joshy">
                            <label for="Co">Joshy</label></td>
                    </tr>                  
       </table>        
                
                <hr>
                <input type="reset">
                <input type="submit">
            </form>
    </div>
</template>

<script>
export default {
  name: 'formulario', 
}
</script>