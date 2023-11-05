import Swal from 'sweetalert2'


export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const toastOptions = {
  success: (text) => ({
      icon: 'success',
      title: text
  }),
  error: (text) => ({
      icon: 'error',
      title: text
  })
};