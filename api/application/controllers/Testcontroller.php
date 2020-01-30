<?php
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, OPTIONS");
defined('BASEPATH') OR exit('No direct script access allowed');

class testcontroller extends CI_Controller {

	public function __construct()
    {
    	parent::__construct();
    	$this->load->model('test_model');
    }

    public function get_employee()
    {
    	echo json_encode($this->test_model->get_employee());
    }

    public function view_particular_data()
    {
        $input = $this->input->post();
        print_r($input);exit;
        echo json_encode($this->test_model->view_particular_data());
    }


}
