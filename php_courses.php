<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body style="text-align: : center; font-size: 50px;">
<?php 
if(!isset($_GET['op']) || !isset($_GET['x']) || !isset($_GET['y']))
		{
			echo "<h1> Incorrect or incomplete data </h1>";
			exit();
		}
		$x = $_GET['x'];
		$y = $_GET['y'];

		switch($_GET['op'])
		{
			case 'sum':
			$result = $x +$y;
			echo "<h1>$x + $y = $result</h1>";
			break;

			case 'substraction':
			$result = $x - $y;
			echo "<h1>$x - $y = $result</h1>";
			break;

			case 'division':
			if($y==0)
			{
				echo "<h1> Cannot divide by zero !</h1>";

			}
			else
			{
				$result = $x / $y;
				echo "<h1>$x / $y = $result</h1>";
				break;
			}

			case 'multiplication':
			$result = $x * $y;
			echo "<h1>$x * $y = $result</h1>";
			break;

			default:
			echo "<h1>Unrecognized operation: ok</h1>";
			break;


			
		}
		?>


</body>
</html>