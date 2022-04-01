<template>
    <div>
        <hr>

        <h2>Pixelpack</h2>
        <ul>
            <li>Mario's pixelpack</li>
            <dd>1 pastel ♥♥♥ a elegir + un Mario's pixeldesign...... {{$store.state.paqueteMario}} Pixelpesos</dd>
            <li>Luigui's pixelpack</li>
            <dd>1 pastel ♥♥♥ a elegir + un Luigui's pixeldesign..... {{$store.state.paqueteLuigui}} Pixelpesos</dd>
            <li>Joshy's pixelpack</li>
            <dd>1 pastel ♥♥♥ a elegir + un Joshy's pixeldesign...... {{$store.state.paqueteYoshi}} Pixelpesos</dd>
        </ul> 
    </div>
</template>

<script>
export default {
  name: 'paquetes', 
}
</script>