          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          {{-- <footer class="footer">
              <div class="d-sm-flex justify-content-center justify-content-sm-between">
                  <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright ©
                      bootstrapdash.com 2020</span>
                  <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a
                          href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin
                          templates</a> from Bootstrapdash.com</span>
              </div>
          </footer> --}}
          <!-- partial -->
          </div>
          <!-- main-panel ends -->
          </div>
          <!-- page-body-wrapper ends -->
          </div>
          <!-- container-scroller -->
          <!-- plugins:js -->
          <script src="assets/vendors/js/vendor.bundle.base.js"></script>
          <!-- endinject -->
          <!-- Plugin js for this page -->
          <script src="assets/vendors/chart.js/Chart.min.js"></script>
          <script src="assets/vendors/progressbar.js/progressbar.min.js"></script>
          <script src="assets/vendors/jvectormap/jquery-jvectormap.min.js"></script>
          <script src="assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
          <script src="assets/vendors/owl-carousel-2/owl.carousel.min.js"></script>
          <!-- End plugin js for this page -->
          <!-- inject:js -->
          <script src="assets/js/off-canvas.js"></script>
          <script src="assets/js/hoverable-collapse.js"></script>
          <script src="assets/js/misc.js"></script>
          <script src="assets/js/settings.js"></script>
          <script src="assets/js/todolist.js"></script>
          <!-- endinject -->
          <!-- Custom js for this page -->
          <script src="assets/js/dashboard.js"></script>
          <!-- End custom js for this page -->


          <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
          <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>


          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

          <script>
              @if ($errors->any())
                  @foreach ($errors->all() as $error)
                      toastr.error("{{ $error }}")
                  @endforeach
              @endif
          </script>

          <script>
              $(document).ready(function() {
                  console.log("11");
                  $.ajaxSetup({
                      headers: {
                          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                      }
                  });

                  $('body').on('click', '.delete-item', function(event) {
                      console.log("22");

                      event.preventDefault()
                      let deleteUrl = $(this).attr('href');

                      Swal.fire({
                          title: 'Are you sure?',
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: 'green',
                          cancelButtonColor: 'red',
                          confirmButtonText: 'Yes, delete it!',
                      }).then((result) => {
                          if (result.isConfirmed) {
                              console.log("33");

                              $.ajax({
                                  type: 'DELETE',
                                  url: deleteUrl,
                                  // dataType: JSON,
                                  success: function(data) {

                                      if (data.status == 'success') {
                                          Swal.fire(
                                              'Deleted!',
                                              data.message,
                                              'success'
                                          )
                                          window.location.reload()
                                      } else if (data.status == 'error') {
                                          Swal.fire(
                                              'Cant Delete!',
                                              data.message,
                                              'error'
                                          )
                                      }

                                  },
                                  error: function(xhr, status, error) {
                                      console.log(xhr.status);
                                      console.log(error);

                                  }
                              })
                          }
                      })
                  })
              })
          </script>

          <script>
              $(document).ready(function() {
                  $('#myTable').DataTable();
              });
          </script>

          {{-- @stack('scripts') --}}

          </body>

          </html>
