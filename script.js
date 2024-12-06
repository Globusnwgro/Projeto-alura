function choosePath(path) {
    const story = document.getElementById('story');
    if (path === 'left') {
        story.textContent = 'Você escolheu o caminho à esquerda e encontrou um rio. Você pode nadar ou construir uma jangada. O que você faz?';
        updateButtons('Nadar', 'Construir Jangada', 'swim', 'raft');
    } else if (path === 'right') {
        story.textContent = 'Você escolheu o caminho à direita e encontrou uma caverna. Você pode entrar ou seguir em frente. O que você faz?';
        updateButtons('Entrar', 'Seguir em Frente', 'enter', 'continue');
    }
}

function updateButtons(option1Text, option2Text, option1Path, option2Path) {
    const buttons = document.querySelectorAll('button');
    buttons[0].textContent = option1Text;
    buttons[0].setAttribute('onclick', `choosePath('${option1Path}')`);
    buttons[1].textContent = option2Text;
    buttons[1].setAttribute('onclick', `choosePath('${option2Path}')`);
}
