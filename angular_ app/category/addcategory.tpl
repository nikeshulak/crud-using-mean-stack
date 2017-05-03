

<form name ="myForm" class="form-horizontal">
  <div class="form-group">
    <label for="name" class="col-sm-2 control-label">Category Name :</label>
    <div class="col-sm-5">
      <input ng-pattern="/^[a-zA-Z\s]*$/" type="text" class="form-control" id="name" ng-model="category.name" placeholder="Enter Category Name" required>
    </div>
  </div>
  <div class="form-group">
    <label for="remarks" class="col-sm-2 control-label">Remarks:</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="remarks" ng-model="category.remarks" placeholder="Enter Remarks" required>
      <!--  ng-pattern="/^[a-zA-Z\s]*$/" added for remarks -->
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-5">
      <input type="submit" class="btn btn-default" ng-disabled="myForm.$invalid" ng-show="!editcategoryMode" ng-click="addCategory(category)" value="Add Category" />
      <input type="submit" class="btn btn-default" ng-disabled="myForm.$invalid" ng-show="editcategoryMode" ng-click="updateCategory(category)" value="Update Category"/>
    </div>
  </div>
</form>
