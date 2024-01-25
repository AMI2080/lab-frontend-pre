import { Component, ViewEncapsulation } from '@angular/core';
import { LinkItem } from './menu-item/menu-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  links: LinkItem[] = [
    new LinkItem('اللوحة الرئيسية', { type: 'fa', icon: 'fa fa-house' }, '/'),
    new LinkItem('الإستقبال', { type: 'fa', icon: 'fa fa-door-open' }, '/x'),
    new LinkItem('سحب العينات', { type: 'fa', icon: 'fa fa-syringe' }, '/x'),
    new LinkItem('نتائج التحاليل', { type: 'fa', icon: 'fa fa-chart-column' }, null, [
      new LinkItem('بحث عن نتيجة', { type: 'fa', icon: 'fa fa-search' }, '/x'),
      new LinkItem('إضافة نتيجة', { type: 'fa', icon: 'fa fa-plus' }, '/x'),
    ]),
    new LinkItem('الفواتير', { type: 'fa', icon: 'fa fa-file-invoice-dollar' }, null, [
      new LinkItem('عرض الفواتير', null, '/x'),
      new LinkItem('بحث فى الفواتير', null, '/x'),
    ]),
    new LinkItem('البيانات', { type: 'fa', icon: 'fa fa-server' }, null, [
      new LinkItem('بيانات المعمل', { type: 'fa', icon: 'fa fa-clinic-medical' }, null, [
        new LinkItem('بيانات المعمل', null, '/x'),
        new LinkItem('تعديل بيانات المعمل', null, '/x'),
        new LinkItem('الفروع', { type: 'fa', icon: 'fa fa-sitemap' }, '/x'),
      ]),
      new LinkItem('التحاليل', { type: 'fa', icon: 'fa fa-microscope' }, null, [
        new LinkItem('قائمة التحاليل', { type: 'fa', icon: 'fa fa-book-medical' }, '/x'),
        new LinkItem('مجموعات التحاليل', { type: 'fa', icon: 'fa fa-layer-group' }, '/x'),
        new LinkItem('تصنيفات التحاليل الرئيسية', { type: 'fa', icon: 'fa fa-tags' }, '/x'),
        new LinkItem('تصنيفات التحاليل الفرعية', { type: 'fa', icon: 'fa fa-tag' }, '/x'),
        new LinkItem('أنواع العينات', { type: 'fa', icon: 'fa fa-vial' }, '/x'),
      ]),
      new LinkItem('الأطباء', { type: 'fa', icon: 'fa fa-user-md' }, null, [
        new LinkItem('قائمة الأطباء', { type: 'fa', icon: 'fa fa-clipboard-list' }, '/x'),
        new LinkItem('مجموعات الأطباء', { type: 'fa', icon: 'fa fa-tags' }, '/x'),
      ]),
      new LinkItem('الجهات المتعاقدة', { type: 'fa', icon: 'fa fa-people-arrows' }, null, [
        new LinkItem('قائمة الجهات المتعاقدة', { type: 'fa', icon: 'fa fa-list' }, '/x'),
        new LinkItem('مجموعات الجهات المتعاقدة', { type: 'fa', icon: 'fa fa-tags' }, '/x'),
      ]),
      new LinkItem('المسئولين', { type: 'fa', icon: 'fa fa-users' }, '/x'),
      new LinkItem('الخدمات', { type: 'fa', icon: 'fa fa-hand-sparkles' }, '/x'),
    ]),
    new LinkItem('المرضى', { type: 'fa', icon: 'fa fa-bed-pulse' }, null, [
      new LinkItem('قائمة المرضى', { type: 'fa', icon: 'fa fa-address-book' }, '/x'),
      new LinkItem('مجموعات المرضى', { type: 'fa', icon: 'fa fa-tags' }, '/x'),
    ]),
  ];
}
