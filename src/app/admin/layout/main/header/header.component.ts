import { Component, HostListener } from '@angular/core';
import { AuthService, User } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User = this.authService.user;

  userActionsIsOpen: boolean = false;

  notificatinsIsOpen: boolean = false;

  private _notificationCount: number = 15;

  @HostListener('window:keyup.Escape') onEscKeyUp() {
    this.userActionsIsOpen = false;
    this.notificatinsIsOpen = false;
  }

  @HostListener('window:click', ['$event.target']) onClick(clickedElement: HTMLElement) {
    if (!clickedElement.closest('.user-actions') && !clickedElement.closest('.user-actions-toggle')) {
      this.userActionsIsOpen = false
    }
    if (!clickedElement.closest('.notifications') && !clickedElement.closest('.notifications-toggle')) {
      this.notificatinsIsOpen = false
    }
  }

  constructor(private authService: AuthService) { }

  get notificationCount(): string | number {
    if (this._notificationCount > 9) {
      return '+9';
    }
    return this._notificationCount;
  }

  get hasNotifications(): boolean {
    return this._notificationCount > 0
  }

  onLogout() {
    const logoutAlert = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-danger mx-1",
        cancelButton: "btn btn-secondary mx-1"
      },
      buttonsStyling: false
    });
    logoutAlert.fire({
      title: "سيتم تسجيل الخروج",
      text: "هل تريد المتابعة؟",
      icon: "question",
      iconColor: '#dc3545',
      confirmButtonText: "نعم",
      focusConfirm: true,
      showCancelButton: true,
      cancelButtonText: "رجوع",
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.authService.logout();
        }
      });
  }
}
