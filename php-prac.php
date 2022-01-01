<?php
$file=fopen('waziri.txt',r+);
fwrite($file,'hellow from other side');
echo fread($file,filesize('waziri.txt'));
fclose('waziri.txt');
?>