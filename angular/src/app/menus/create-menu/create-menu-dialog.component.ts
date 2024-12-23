import {
    Component,
    Injector,
    OnInit,
    EventEmitter,
    Output,
  } from "@angular/core";
  import { BsModalRef } from "ngx-bootstrap/modal";
  import { AppComponentBase } from "@shared/app-component-base";
  import {
    PermissionDto,
    MenuServiceProxy,
    MenuListDto,
    MenuListDtoListResultDto,
    CreateMenuInput
  } from "@shared/service-proxies/service-proxies";
  import { forEach as _forEach, map as _map } from "lodash-es";
  
  @Component({
    templateUrl: "create-menu-dialog.component.html",
  })
  export class CreateMenuDialogComponent
    extends AppComponentBase
    implements OnInit
  {
    saving = false;
    menu = new MenuListDto();
    permissions: PermissionDto[] = [];
    checkedPermissionsMap: { [key: string]: boolean } = {};
    defaultPermissionCheckedStatus = true;

   categories: any[] = [
      { id: 1, name: 'Bebidas' },
      { id: 2, name: 'Lanches' },
      { id: 3, name: 'Pratos principais' },
      { id: 4, name: 'Sobremesas' },
      { id: 5, name: 'Aperitivos' },
      { id: 6, name: 'Caldinhos' },
      { id: 7, name: 'Refrigerantes' },
      { id: 8, name: 'Doces' },
    ];
    
    selectedCategory: string = '';
    @Output() onSave = new EventEmitter<any>();
  
    constructor(
      injector: Injector,
      private _menuService: MenuServiceProxy,
      public bsModalRef: BsModalRef
    ) {
      super(injector);
    }
  
    ngOnInit(): void {
      this._menuService
        .getList(false)
        .subscribe((result: MenuListDtoListResultDto) => {       
         
        });     
    }

     
  
    save(): void {
      this.saving = true;
  
      const menu = new CreateMenuInput();
      menu.init(this.menu);
       
      this._menuService.create(menu).subscribe(
        () => {
          this.notify.info(this.l("SavedSuccessfully"));
          this.bsModalRef.hide();
          this.onSave.emit();
        },
        () => {
          this.saving = false;
        }
      );
    }
  }
  