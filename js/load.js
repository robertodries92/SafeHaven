// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('?');
    console.log(hashes)
    if (hashes[0] == 'success') {
        toastr.success('Check your Email to confirm your subscription to our list.')

    } else if (hashes[0] == 'failure') {
        toastr.error('Oops, something went wrong. Please try again.')
    }
}