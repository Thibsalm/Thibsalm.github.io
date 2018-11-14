<!DOCTYPE html>
<html>
<head>
	<title>My friends book</title>
</head>
<body>
	<style>
	/* Style the header */
		header 
		{
	 		background-color: #666;
			 padding: 30px;
			 text-align: center;
			 font-size: 35px;
			 color: white;
		}
		footer 
		{
			 background-color: #777;
			 padding: 10px;
			 text-align: center;
			 color: white;
		}
		input
		{
			margin-top: 50px;
			margin-bottom: 25px;
		}
	</style>

	<header>
		<h2> Header </h2>
	</header>

	<form action="index.php" method="post">
		Name: <input type="text" name="name">
		<input type="submit" value="Add new friend">
	</form>

	<p style = "font-size: 50px;"><b> My best friends : </b></p>

	<?php

	$filename = 'friends.txt';
	
	if(isset($_POST['name']))
	{
		$file = fopen($filename, "a");
		$name = $_POST['name'];
		fwrite($file, "$name\n");
		fclose($file);
	}

	
	$file = fopen($filename, "r");
	while(!feof($file))
	{
		$word=fgets($file);
		
		if(isset($_POST['nameFilter']))
		{
			$word=strstr($word, $_POST['nameFilter'], true).strstr($word,$_POST['nameFilter']);
			if($word)echo "<ul><li>$word</li></ul><br>";
		}
		else
		{
			if($word)echo "<ul><li>$word</li></ul><br>";
		}
		
	}


	?>

	<form action="index.php" method="post">
		<input type="text" name="nameFilter">
		<input type="submit" value="Filter list">
	</form>

	<footer>
		<h2> Footer </h2>
	</footer>
</body>
</html>