
include_once("model/Book.php");
class Model{
    public function getBookList()
    {
        return array(
        "JungleBook"=>new Book("JungleBook","Kipling","Aclassicbook"),
        "Moonwalker"=>new Book("Moonwalker","Walker",""),
        "PHPforDummies"=>new Book("PHPforDummies","SomeSmartGuy","")
        );
    }

    public function getBook($title)
    {
        $allBooks=$this->getBookList();
        return $allBooks[$title];
    }

}