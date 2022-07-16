import React from 'react'
import $ from 'jquery'

export default function Hello() {
  ///======Clone method
  $(document).ready(function () {
    $('body').on('click', '.add_node_btn_frm_field', function (e) {
      var index =
        $(e.target).closest('.form_field_outer').find('.form_field_outer_row')
          .length + 1
      var cloned_el = $(e.target).closest('.form_field_outer_row').clone(true)

      $(e.target)
        .closest('.form_field_outer')
        .last()
        .append(cloned_el)
        .find('.remove_node_btn_frm_field:not(:first)')
        .prop('disabled', false)

      $(e.target)
        .closest('.form_field_outer')
        .find('.remove_node_btn_frm_field')
        .first()
        .prop('disabled', true)

      //change id
      $(e.target)
        .closest('.form_field_outer')
        .find('.form_field_outer_row')
        .last()
        .find("input[type='text']")
        .attr('id', 'mobileb_no_' + index)

      $(e.target)
        .closest('.form_field_outer')
        .find('.form_field_outer_row')
        .last()
        .find('select')
        .attr('id', 'no_type_' + index)

      console.log(cloned_el)
      //count++;
    })
    $(document).ready(function () {
      $('body').on('click', '.add_new_frm_field_btn', function () {
        console.log('clicked')
        var index =
          $('.form_field_outer').find('.form_field_outer_row').length + 1
        $('.form_field_outer').append(`
<div class="row form_field_outer_row">
  <div class="form-group col-md-6">
    <input type="text" class="form-control w_90" name="mobileb_no[]" id="mobileb_no_${index}" placeholder="Enter mobiel no." />
  </div>
  <div class="form-group col-md-4">
    <select name="no_type[]" id="no_type_${index}" class="form-control">
      <option>--Select type--</option>
      <option>Personal No.</option>
      <option>Company No.</option>
      <option>Parents No.</option>
    </select>
  </div>
  <div class="form-group col-md-2 add_del_btn_outer">
    <button class="btn_round add_node_btn_frm_field" title="Copy or clone this row">
      <i class="fas fa-copy"></i>
    </button>

    <button class="btn_round remove_node_btn_frm_field" disabled>
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
</div>
`)
        $('.form_field_outer')
          .find('.remove_node_btn_frm_field:not(:first)')
          .prop('disabled', false)
        $('.form_field_outer')
          .find('.remove_node_btn_frm_field')
          .first()
          .prop('disabled', true)
      })
    })
    $(document).ready(function () {
      //===== delete the form fieed row
      $('body').on('click', '.remove_node_btn_frm_field', function () {
        $(this).closest('.form_field_outer_row').remove()
        console.log('success')
      })
    })
  })
  return (
    <div class="row p-0">
      <div class="col-md-12 p-0 form_sec_outer_task border">
        <div class="col-md-12 p-0">
          <div class="col-md-12 form_field_outer p-0">
            <div class="row p-0 form_field_outer_row">
              <div class="form-group col-md-2">
                <input
                  type="text"
                  class="form-control w_90"
                  name="mobileb_no[]"
                  id="mobileb_no_1"
                  placeholder="Enter mobiel no."
                />
              </div>
              <div class="form-group col-md-10">
                <input
                  type="text"
                  class="form-control w_90"
                  name="mobileb_no[]"
                  id="mobileb_no_1"
                  placeholder="Enter mobiel no."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row ml-0 bg-light mt-3 border py-3">
        <div class="col-md-12">
          <button class="btn btn-outline-lite py-0 add_new_frm_field_btn">
            <i class="fas fa-plus add_icon"></i> Add New field row
          </button>
        </div>
      </div>
    </div>
  )
}
