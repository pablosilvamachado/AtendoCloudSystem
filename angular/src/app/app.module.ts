import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';

//event
import { EventsComponent } from './events/event.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

//table
import { TablesComponent } from './tables/table.component';
import { CreateTableComponent } from './tables/create-table/create-table.component';
import { TableDetailComponent } from './tables/table-detail/table-detail.component';

//Menus
import { MenusComponent } from './menus/menus.component'; 
import { CreateMenuDialogComponent } from './menus/create-menu/create-menu-dialog.component';
import { EditMenuDialogComponent } from './menus/edit-menu/edit-menu-dialog.component';


//Orders
import { OrdersComponent } from './orders/orders.component'; 
import { EditOrderDialogComponent } from './orders/edit-order/edit-order-dialog.component';
import { CreateOrderDialogComponent } from './orders/create-order/create-order-dialog.component';

//Payments
import { PaymentsComponent } from './payments/payments.component'; 
import { EditPaymentDialogComponent } from './payments/edit-payment/edit-payment-dialog.component';
import { CreatePaymentDialogComponent } from './payments/create-payment/create-payment-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        // tenants
        TenantsComponent,
        CreateTenantDialogComponent,
        EditTenantDialogComponent,
        // roles
        RolesComponent,
        CreateRoleDialogComponent,
        EditRoleDialogComponent,
        // users
        UsersComponent,
        CreateUserDialogComponent,
        EditUserDialogComponent,
        ChangePasswordComponent,
        ResetPasswordDialogComponent,
        // layout
        HeaderComponent,
        HeaderLeftNavbarComponent,
        HeaderLanguageMenuComponent,
        HeaderUserMenuComponent,
        FooterComponent,
        SidebarComponent,
        SidebarLogoComponent,
        SidebarUserPanelComponent,
        SidebarMenuComponent,

        //event
        EventsComponent,
        CreateEventComponent,
        EventDetailComponent,

        //table
        TablesComponent,
        CreateTableComponent,
        TableDetailComponent,

        //Menus
        MenusComponent,
        CreateMenuDialogComponent,
        EditMenuDialogComponent,

        //Orders
        OrdersComponent,
        EditOrderDialogComponent,
        CreateOrderDialogComponent,

        //Payments
        PaymentsComponent,
        EditPaymentDialogComponent,
        CreatePaymentDialogComponent,


    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ModalModule.forChild(),
        BsDropdownModule,
        CollapseModule,
        TabsModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
    ],
    providers: [DatePipe]
})
export class AppModule {}
