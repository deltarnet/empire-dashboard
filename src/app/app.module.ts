import {
    BrowserModule
}
from '@angular/platform-browser';
import {
    NgModule
}
from '@angular/core';
import {
    RouterModule
}
from '@angular/router';
import {FormsModule, ReactiveFormsModule
}
from '@angular/forms';
import {
    AppRoutingModule
}
from './app-routing.module';

import {
    NgbModule
}
from '@ng-bootstrap/ng-bootstrap';

import {
    AppComponent
}
from './app.component';
import {
    NavbarComponent
}
from './navbar/navbar.component';
import {
    SidebarComponent
}
from './sidebar/sidebar.component';
import {
    FooterComponent
}
from './footer/footer.component';
import {
    DashboardComponent
}
from './dashboard/dashboard.component';
import {
    StatusComponent
}
from './status/status.component';

@NgModule({ declarations: [AppComponent, NavbarComponent, SidebarComponent, FooterComponent, DashboardComponent, StatusComponent ], imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgbModule ], providers: [], bootstrap: [AppComponent] }) export class AppModule {}
