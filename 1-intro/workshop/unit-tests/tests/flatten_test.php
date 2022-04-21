<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    public function test_something()
    {
        $this->assertEquals(1337, 1337);
    }

    public function test_one_data()
    {
        $this->assertEquals(flatten(["velo"]), ["velo"]);
    }

    public function test_two_data()
    {
        $this->assertEquals(flatten([1337, 23]), [1337, 23]);
    }

    public function test_nested_once()
        {
            $this->assertEquals(flatten(["r", 5, [true, 2, 3]]), ["r", 5, true, 2, 3]);
        }

    public function test_nested_multiple()
    {
        $this->assertEquals(flatten([4, [5, [6, 7]], [1, 2, 3]]), [4, 5, 6, 7, 1, 2, 3]);
    }
}