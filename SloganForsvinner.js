<script>
    window.onload = function() {
        setTimeout(function() {
            var slogan = document.getElementById('slogan-container');
            var whatsNew = document.getElementById('whats-new');
            slogan.classList.add('slogan-hidden');
            setTimeout(function() {
                slogan.style.display = 'none';
                whatsNew.style.display = 'flex'; // Show the item boxes
            }, 500); // Match this time with the CSS transition duration
        }, 3000)
    };
</script>
