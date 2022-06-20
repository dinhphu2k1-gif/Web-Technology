<?php
// set name of XML file
$file = "Lab7/7.6.3/sins.xml";
// load file
$xml = simplexml_load_file($file) or die ("Unable to load XML file!");
// iterate over <sin> element collection
foreach ($xml->sin as $sin) {
    echo "$sin\n";
}
