<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    public function test_something() {
        $this->assertEquals(42, 42);
    }

    public function test_insert() {
        $tempTracker = new TempTracker();
        $tempTracker->insert(12);

        $this->assertEquals($tempTracker->get_temps(), [12]);
    }

    public function test_get_min_no_value(){
        $tempTracker = new TempTracker();
        $tempTracker->insert(12);
        $tempTracker->insert(8);
        $tempTracker->insert(23);

        $this->assertEquals($tempTracker->get_min(), 8);
    }

    public function test_get_max_no_value(){
        $tempTracker = new TempTracker();
        $tempTracker->insert(12);
        $tempTracker->insert(8);
        $tempTracker->insert(23);

        $this->assertEquals($tempTracker->get_max(), 23);
    }

    public function test_get_mean(){
        $tempTracker = new TempTracker();
        $tempTracker->insert(12);
        $tempTracker->insert(10);
        $tempTracker->insert(20);

        $this->assertEquals($tempTracker->get_mean(), 14);
    }
}