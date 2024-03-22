<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home.css">
    <title>Stress</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comforter&display=swap" rel="stylesheet">
</head>
<body>

    <div class="container">

        <div class="navbar-1">
            <!-- Navbar content -->
        </div>

        <div class="display">

            <div class="display-box">
                <div class="display-logo">
                    <h1>Stress Busters</h1>
                </div>

                <img class="imgg" src="hehe.jpg" alt="Description of Image">

                <div class="display-4">
                    <!-- Additional content here -->
                </div>
            </div>

        </div>

        <div class="display-cards">
            <div class="cards-box">
                <a href="be_index.html">
                    <div class="card C1">
                        <div class="card-icon-title">
                            <img src="home-wedding.png" height="30px">
                            <h2>Wedding Events</h2>
                        </div>
                    </div>
                </a>
                <a href="b.html">
                    <div class="card C2">
                        <div class="card-icon-title">
                            <img src="home-cakepng.png" height="30px">
                            <h2>Birthday Party</h2>
                        </div>
                    </div>
                </a>
                <a href="indexp.html">
                    <div class="card C3">
                        <div class="card-icon-title">
                            <img src="home-wine.png" height="30px">
                            <h2>Party & Events</h2>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </div>

    <script>
        // JavaScript code goes here
        // Example: Add event listeners for card clicks
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                alert('You clicked a card!');
            });
        });
    </script>

</body>
</html>
