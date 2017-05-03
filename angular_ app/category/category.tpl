<div>
    <div style="margin-bottom: 12px;">
        <input type="button" class="btn btn-success" ui-sref="addcategory" value="Add" style="width: 11%;font-size: 15px;">
    </div>


<div class="searchBar">
<label>Search Here: </label>
<input type="text"  ng-model="searchText"/>
</div>
<div style="border:1px solid black; min-height:200px">
        <table >
            <tr>
               <!--  <th>ID</th> -->
                <th>Category name</th>
                <th>Remarks</th>
            </tr>
            {{ dump(record) }}
            <tr  class="animate" ng-repeat="category in record | filter: searchText "> 
           
                <td>{{category.name}}</td>
                <td>{{category.remarks}}</td>
                <td>
                    <input class="btn btn-primary" type="button"  ui-sref="editcategory({'_id':category._id})" value="edit" />
                </td>
                <td>
                    <input class="btn btn-danger" type="button" ui-sref="deletecategory({'_id':category._id})" value="Delete" />
                </td>
            </tr>
        </table>
    </div>
    </div>