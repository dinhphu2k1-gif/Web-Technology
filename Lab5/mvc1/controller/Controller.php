include_once("model/Model.php");
class Controller{
    public $model;
    public function__construct()
    {
        $this->model=new Model();
    }
    public function invoke()
    {
        if(!isset($_GET['book']))
            {
            $books=$this->model->getBookList();
            include 'view/booklist.php';
        }
        else
        {
            $book=$this->model->getBook($_GET['book']);
            include 'view/viewbook.php';
        }
    }
}