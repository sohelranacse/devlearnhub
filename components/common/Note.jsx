import Highlight from "react-highlight";
import "highlight.js/styles/night-owl.css";

const CodeBlock = ({ code, language }) => {
  return <Highlight className={language}>{code}</Highlight>;
};

function Note() {
  return (
    <div className="">
      <h4>Code Title here</h4>
      <CodeBlock
        code={`function employee_resigned() 
	{
		$loggedUserID = $this->session->userdata('user_id');
		$edited_on = date('Y-m-d H:i:s');
		$employeeID = $this->input->post('employee_id');
		$active_status = $this->input->post('active_status');
		$temp_v = $this->input->post('temp_v');


		if ($active_status == 2 && $temp_v == 1 ) {
			$notice_period_days = NULL;
			$last_date_of_office = NULL;
			if ($this->input->post('notice_period_days')) {
				$notice_period_days = $this->input->post('notice_period_days');
			}
			if ($this->input->post('last_date_of_office')) {
				$last_date_of_office = $this->input->post('last_date_of_office');
			}

			$data_Employee = array(
				'active_status' 			=> $active_status,
				'provided_resign_letter' 	=> $this->input->post('provided_resign_letter'),
				'notice_period_days' 		=> $notice_period_days,
				'last_date_of_office' 		=> $last_date_of_office,
				'resign_date' 				=> $this->input->post('resign_date'),
				'employee_edited_on' 		=> $edited_on,
				'employee_edited_by' 		=> $loggedUserID,
				'operation_ip' 				=> $this->input->ip_address()
			);

			if (!(empty($_FILES['userfile']['name']))) {

				if ($_FILES["userfile"]["size"] <= 1048576) { // 1MB

					$url = 'http://sqcables.info/employee_documents/';
					$sub_directory = 'resigned_documents';

					$file_name = $_FILES['userfile']['name'];
					$replace="_";
					$pattern="/[^a-zA-Z0-9\.]/";
					$fname=preg_replace($pattern,$replace,$file_name);      
					$dName=preg_replace($pattern,$replace,date("Y-m-d"));      
					$temp = explode(".", $fname);
					$newfilename = round(microtime(true)) . '.' . end($temp);
					$resign_doc = $employeeID.'_'.$dName.'.'.end($temp);


					$uploadDir = './upload/';
					$uploadFile = $uploadDir . basename($resign_doc);
					if (file_exists($uploadFile)) { unlink($uploadFile); }
					$path = $_FILES['userfile']['name'];
					$extension = pathinfo($path, PATHINFO_EXTENSION);
					if ($extension=="jpg" OR $extension=="jpeg" OR $extension=="png" OR $extension=="pdf"  OR $extension=="doc" OR $extension=="docx") {
						$ipchecklist = array("localhost", "127.0.0.1", "::1");
						if(!in_array($_SERVER['REMOTE_ADDR'], $ipchecklist)){	
							if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadFile)) {
								$uploadRequest = array(
									'sub_directory' => $sub_directory,
									'fileName' => basename($resign_doc),
									'fileData' => base64_encode(file_get_contents($uploadFile))
								);
								$curl = curl_init();
								curl_setopt($curl, CURLOPT_URL, $url.'scripts.php');
								curl_setopt($curl, CURLOPT_TIMEOUT, 30);
								curl_setopt($curl, CURLOPT_POST, 1);
								curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
								curl_setopt($curl, CURLOPT_POSTFIELDS, $uploadRequest);
								$response = curl_exec($curl);
								curl_close($curl);
								echo $response;
								unlink($uploadFile);

								$data_Employee['resign_doc'] = $url.$sub_directory.'/'.date('Y').'/'.$resign_doc;
							} else {
								echo "Possible file upload attack!\n";
							}
						}
					}

				} // file size
			}

			$this->db->where('employee_id',$employeeID);
			$this->db->update('employee_information',$data_Employee);

			$dt_upd = array('user_password' => md5('job_left'), 'user_sysacl_role_id' => 2);
			$this->db->where('user_id', $this->input->post('user_id'));
			$this->db->update('users', $dt_upd);

		} elseif ($active_status == 1) {
			$data_Employee = array( 
				'active_status' => $active_status,
				'notice_period_days' => NULL,
				'last_date_of_office' => NULL,
				'resign_doc' => NULL,
				'resign_date' => NULL,
				'employee_edited_on' => $edited_on,
				'employee_edited_by' => $loggedUserID,
				'operation_ip' => $this->input->ip_address()
			);
			$this->db->where('employee_id',$employeeID);
			$this->db->update('employee_information',$data_Employee);
		}
	}`}
        language={"language-php"}
      />
      <div className="my-4"></div>
    </div>
  );
}

export default Note;
