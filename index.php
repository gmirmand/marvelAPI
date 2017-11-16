<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Marvel</title>
    <link rel="stylesheet" href="src/css/main.css">
    <link rel="stylesheet" href="src/css/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
<div class="container">
    <div class="plate">
        <p class="script"><span>FIND</span></p>
        <p class="shadow text1">YOUR</p>
        <p class="shadow text2">HERO</p>
        <p class="shadow text3">MARVEL</p>
        <p class="script"><span>by Gaëtan</span></p>
    </div>
    <div class="ui-widget">
        <input type="text" id="search" placeholder="Iron Man">
    </div>
    <div class="ui-widget heroes">
        <div id="result" class="ui-widget-content plate">
        </div>
        <div class="comics plate hide">
            <h2 class='script'><span>Les comics</span></h2>
        </div>
    </div>
</div>
</body>

<script src="src/js/script.js"></script>

</html>