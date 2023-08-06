// this is for search result query 
Item.search = async function(query) {
  return this.findAll({
    where: {
      // Search the name and description fields (adjust as needed)
      [Op.or]: [
        { item_name: { [Op.like]: `%${query}%` } },
        { description: { [Op.like]: `%${query}%` } }
      ]
    }
  });
}

//this is for delete item using item id
function deleteItem(itemId) {
    fetch(`/delete-item/${itemId}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.message); 
      })
      .catch((error) => {
        console.error(error);
      });
  }

