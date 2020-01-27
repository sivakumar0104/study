<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class test_model extends CI_Model
{
	public function get_employee()
    {
    	$data = $this->db->select('*')
    			->from('employee_master')
    			->where('status','ACTIVE')
    			->get()->result_array();
    	return $data;
    }
}
?>