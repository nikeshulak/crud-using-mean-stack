<div style="border:1px solid black; min-height:100px">
        <table>
        
            <tr>
                <!-- <th>ID</th> -->
                <th>Category Name</th>
                <th>Remarks</th>
                <th>Action</th>
            </tr>
            <tr >
                <td>{{category.name}}</td>
                <td>{{category.remarks}}</td>
               
               <td><input class="btn btn-danger" type="button" ng-click="deleteCategory(category._id)" value="Confirm"/></td>
                
            </tr>
        </table>
    </div>