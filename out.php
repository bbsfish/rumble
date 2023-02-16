<?php
for ($i=0; $i < 36; $i++) { 
    $x = str_pad((string) $i+1, 3, "0", STR_PAD_LEFT);
    $a = "<data><file>goods_$x.jpg</file><name>GOODS NAME $x</name><desc>SAMPLE DESC $x</desc><price>1000</price><stock>10<stock></data>".PHP_EOL;
        echo $a;
}
