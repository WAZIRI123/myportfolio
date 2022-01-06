<?php
function compare($a,$b){
    if($a===$b){
        return 0;
    }else {
        return 'diff';
    }
}
$arr=array('name'=>'waziriw','lname'=>'allye');
$arrays=array('mtoto'=>'=name','mzuri'=>'lastname');
$array1=array_diff_uassoc($arrays,$arr,compare);
print_r($array1);
?>