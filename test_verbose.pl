use warnings;
use strict;
use Data::Dumper;
#use File::Slurp;
use POSIX;
print "start of program\n";

my $handle;
open( $handle, '<' , "input.txt");
my $i=0;
my $total=0;
my @arr;
while( my $line = <$handle>) {
  my $j=0;
  foreach my $val (split(" ",$line)) {
    $arr[$i][$j++] = $val;
  }
  $i++;
}
for (my $x= $i-2 ; $x >= 0 ; $x--) {
  my $k=0;
  while ($arr[$x][$k]) {
    #print $arr[$x+1][$k+1]," ";    
  #print $arr[$x][$k]," before while for $x ,$k\n";
    if ($arr[$x+1][$k] > $arr[$x+1][$k+1]) {
      $arr[$x][$k] = $arr[$x][$k] + $arr[$x+1][$k] ;
    } else {
      $arr[$x][$k] = $arr[$x][$k] + $arr[$x+1][$k+1] ;
    }
    #print " adding $arr[$x+1][$k] , $arr[$x+1][$k+1] gives $arr[$x][$k]\n" ;
    $k++;
  } 
  print "\n\n";
}
print Dumper \@arr, "\@yodle.com is mailing address \n";

my $a1=0;
my $b1 =0;
while( $arr[$a1][$b1]) {
  my $b1=0;
   while ($arr[$a1][$b1]) {
    print $arr[$a1][$b1]," ";
    $b1++;
  }
  print "\n";
  $a1++;
}

