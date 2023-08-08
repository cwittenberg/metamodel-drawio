function showInputModal(question, title = "Input Required", callback) {
    // Create modal elements
    var modal = $('<div>', { class: "modal fade", id: "inputModal", "tabindex": "-1", "aria-labelledby": "inputModalLabel", "aria-hidden": "true" });
    var modalDialog = $('<div>', { class: "modal-dialog" }).appendTo(modal);
    var modalContent = $('<div>', { class: "modal-content" }).appendTo(modalDialog);

    // Modal header
    var modalHeader = $('<div>', { class: "modal-header" }).appendTo(modalContent);
    $('<h5>', { class: "modal-title", id: "inputModalLabel", text: title }).appendTo(modalHeader);
    $('<button>', { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }).appendTo(modalHeader);

    // Modal body
    var modalBody = $('<div>', { class: "modal-body" }).appendTo(modalContent);
    $('<p>', { text: question }).appendTo(modalBody);
    $('<input>', { type: "text", class: "form-control", id: "userInput" }).appendTo(modalBody);

    // Modal footer
    var modalFooter = $('<div>', { class: "modal-footer" }).appendTo(modalContent);
    $('<button>', { type: "button", class: "btn btn-secondary", "data-bs-dismiss": "modal", text: "Close" }).appendTo(modalFooter);
    $('<button>', { type: "button", class: "btn btn-primary", text: "Submit", click: function() { callback($("#userInput").val()); } }).appendTo(modalFooter);

    // Append modal to body
    $('body').append(modal);

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('inputModal'));
    myModal.show();

    // Remove the modal from the DOM when it's hidden
    $('#inputModal').on('hidden.bs.modal', function (e) {    
        $('#inputModal').remove();
    });
}

function showMessageBox(message, type = "informational", title = "Notification") {
    // Create modal elements
    var modal = $('<div>', { class: "modal fade", id: "notificationModal", "tabindex": "-1", "aria-labelledby": "notificationModalLabel", "aria-hidden": "true" });
    var modalDialog = $('<div>', { class: "modal-dialog" }).appendTo(modal);
    var modalContent = $('<div>', { class: "modal-content" }).appendTo(modalDialog);
  
    // Modal header
    var modalHeader = $('<div>', { class: "modal-header" }).appendTo(modalContent);
    $('<h5>', { class: "modal-title", id: "notificationModalLabel", text: title }).appendTo(modalHeader);
    $('<button>', { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }).appendTo(modalHeader);
  
    // Modal body
    var modalBody = $('<div>', { class: "modal-body" }).appendTo(modalContent);
    var row = $('<div>', { class: "row align-items-center" }).appendTo(modalBody);
    var iconContainer = $('<div>', { class: "col-auto" }).appendTo(row);
    var messageContainer = $('<div>', { class: "col" }).appendTo(row);
    $('<p>', { text: message }).appendTo(messageContainer);
  
    // Modal footer
    var modalFooter = $('<div>', { class: "modal-footer" }).appendTo(modalContent);
    $('<button>', { type: "button", class: "btn btn-secondary", "data-bs-dismiss": "modal", text: "Close" }).appendTo(modalFooter);
  
    // Customize modal based on type
    switch (type) {
      case "warning":
        modalContent.addClass("warning-modal");
        modalHeader.addClass("warning-header");
        modalFooter.addClass("warning-footer");
        $('<i>', { class: "fa-solid fa-triangle-exclamation warning icon-large" }).appendTo(iconContainer); // Add warning icon
        break;
      case "critical":
        modalContent.addClass("critical-modal");
        modalHeader.addClass("critical-header");
        modalFooter.addClass("critical-footer");
        $('<i>', { class: "fa-solid fa-circle-exclamation error icon-large" }).appendTo(iconContainer); // Add critical icon
        break;
      case "informational":
        modalContent.addClass("informational-modal");
        modalHeader.addClass("informational-header");
        modalFooter.addClass("informational-footer");
        $('<i>', { class: "fa-solid fa-circle-info info icon-large" }).appendTo(iconContainer); // Add informational icon
        break;
      default:
        break;
    }
  
    // Append modal to body
    $('body').append(modal);
  
    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('notificationModal'));
    myModal.show();
  
    // Remove the modal from the DOM when it's hidden
    $('#notificationModal').on('hidden.bs.modal', function (e) {    
      $('#notificationModal').remove();
    });
  }

  function showLogo() {
    if($('#loaderLogo').length) {
       $('#loaderLogo').remove();
    }
 
    var div = $('<div>', {
       id: 'loaderLogo'
    });
 
    var svg = $(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" id="chart-svg" style="cursor: default;">
       <g id="chart-top-container">
          <g id="chart-container">
             <g id="i1" class="lvl-1" transform="translate(150,157)">
                <g>
                   <path d="M0,-12L0,-140L24,-128L24,0Z" fill="#cc291f" />
                   <path d="M0,-12L0,-140L24,-128L24,0Z" opacity="0.11" />
                   <path d="M24,-128L24,0L54,-15L54,-143Z" fill="#cc291f" />
                   <path d="M24,-128L24,0L54,-15L54,-143Z" opacity="0.29" />
                   <path d="M0,-140L24,-128L54,-143L30,-155Z" fill="#cc291f" />
                </g>
             </g>
             <g id="i2" class="lvl-1" transform="translate(114,104)">
                <g>
                   <path d="M0,-12L0,-44L24,-32L24,0Z" fill="#cc291f" />
                   <path d="M0,-12L0,-44L24,-32L24,0Z" opacity="0.11" />
                   <path d="M24,-32L24,0L48,-12L48,-44Z" fill="#cc291f" />
                   <path d="M24,-32L24,0L48,-12L48,-44Z" opacity="0.29" />
                   <path d="M0,-44L24,-32L48,-44L24,-56Z" fill="#cc291f" />
                </g>
             </g>
             <g id="i3" class="lvl-1" transform="translate(84,94)">
                <g>
                   <path d="M0,-12L0,-44L24,-32L24,0Z" fill="#cc291f" />
                   <path d="M0,-12L0,-44L24,-32L24,0Z" opacity="0.11" />
                   <path d="M24,-32L24,0L120,-48L120,-80Z" fill="#cc291f" />
                   <path d="M24,-32L24,0L120,-48L120,-80Z" opacity="0.29" />
                   <path d="M0,-44L24,-32L120,-80L96,-92Z" fill="#cc291f" />
                </g>
             </g>
             <g id="i4" class="lvl-1" transform="translate(4,150)">
                <g>
                   <path d="M0,-12L0,-132L24,-120L24,0Z" fill="#cc291f" />
                   <path d="M0,-12L0,-132L24,-120L24,0Z" opacity="0.11" />
                   <path d="M24,-120L24,0L48,-12L48,-132Z" fill="#cc291f" />
                   <path d="M24,-120L24,0L48,-12L48,-132Z" opacity="0.29" />
                   <path d="M0,-132L24,-120L48,-132L24,-144Z" fill="#cc291f" />
                </g>
             </g>
             <g id="i5" class="lvl-1" transform="translate(40,102)">
                <g>
                   <path d="M0,-12L0,-44L24,-32L24,0Z" fill="#cc291f" />
                   <path d="M0,-12L0,-44L24,-32L24,0Z" opacity="0.11" />
                   <path d="M24,-32L24,0L48,-12L48,-44Z" fill="#cc291f" />
                   <path d="M24,-32L24,0L48,-12L48,-44Z" opacity="0.29" />
                   <path d="M0,-44L24,-32L48,-44L24,-56Z" fill="#cc291f" />
                </g>
             </g>
             <g id="i6" class="lvl-1" transform="translate(76,186)">
                <g>
                   <path d="M0,-12L0,-132L24,-120L24,0Z" fill="#cc291f" />
                   <path d="M0,-12L0,-132L24,-120L24,0Z" opacity="0.11" />
                   <path d="M24,-120L24,0L52,-14L52,-134Z" fill="#cc291f" />
                   <path d="M24,-120L24,0L52,-14L52,-134Z" opacity="0.29" />
                   <path d="M0,-132L24,-120L52,-134L28,-146Z" fill="#cc291f" />
                </g>
             </g>
             <g id="i7" class="lvl-1" transform="translate(4,98)">
                <g>
                   <path d="M0,-48L0,-80L96,-32L96,0Z" fill="#cc291f" />
                   <path d="M0,-48L0,-80L96,-32L96,0Z" opacity="0.11" />
                   <path d="M96,-32L96,0L120,-12L120,-44Z" fill="#cc291f" />
                   <path d="M96,-32L96,0L120,-12L120,-44Z" opacity="0.29" />
                   <path d="M0,-80L96,-32L120,-44L24,-92Z" fill="#cc291f" />
                </g>
             </g>
          </g>
       </g>
    </svg>		
 </div>`);
 
    svg.appendTo(div);
 
    div.appendTo('body');
 
 
    gsap.from("#i1, #i2, #i3", {
       scale: 0,
       opacity: 0,
       repeat: -1,
       yoyo: true,
       duration: 0.8,
       transformOrigin: "center center",
    });
 
    gsap.from("#i4, #i5, #i6, #i7", {
       scale: 0,
       opacity: 0,
       repeat: -1,
       yoyo: true,
       duration: 0.6,
       transformOrigin: "center center",
    });
 }