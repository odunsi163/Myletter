const envelope = document.getElementById('envelope');
    const topFlap = document.querySelector('.top');
    const letter = document.querySelector('.letter');

    envelope.addEventListener('click', () => {
        topFlap.classList.toggle('open');
        letter.classList.toggle('reveal');
    });
