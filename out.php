<?php
$r = array();
for ($i=0; $i < 36; $i++) { 
    $x = str_pad((string) $i+1, 3, "0", STR_PAD_LEFT);
    $arr = array(
        "id" => "S" . $x,
        "file" => "goods_$x.jpg",
        "name" => "GOODS NAME $x",
        "desc" => "SAMPLE DESC $x",
        "price" => 1000,
        "stock" => 10,
        "sold" => 1,
        "orderform"=> "https://docs.google.com/forms/d/e/1FAIpQLSfaDj51OBVD2YUfKay23nVsDuGOs4iEPuprRqhh-mRmcVZLfw/viewform?usp=sf_link"
    );
    // $a = "<data><file>goods_$x.jpg</file><name>GOODS NAME $x</name><desc>SAMPLE DESC $x</desc><price>1000</price><stock>10<stock></data>".PHP_EOL;
    array_push($r, $arr);
}
echo json_encode($r);