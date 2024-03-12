import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css';

(function(){
    const cpfGera = new GeraCPF();
    const divcpf = document.querySelector('.cpfGerado');

    divcpf.innerHTML = cpfGera.geraNovoCPF();
})();
