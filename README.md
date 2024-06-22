# Create the README.md file content
readme_content = """
# My Awesome Project

## مقدمة
هذا المشروع هو نظام إدارة الفروع لعرض ونقل بيانات الفروع، عرض التقارير، وتحديث الإعدادات.

## الملفات والمجلدات
- `index.html` - الصفحة الرئيسية للنظام.
- `report.html` - صفحة التقارير.
- `settings.html` - صفحة الإعدادات.
- `transferredData.html` - صفحة البيانات المرحلة.
- `css/styles.css` - ملف التنسيقات.
- `js/main.js` - ملف جافاسكريبت للصفحة الرئيسية.
- `js/reports.js` - ملف جافاسكريبت لصفحة التقارير.
- `js/settings.js` - ملف جافاسكريبت لصفحة الإعدادات.
- `js/transferredData.js` - ملف جافاسكريبت لصفحة البيانات المرحلة.

## كيفية الاستخدام
1. افتح `index.html` في متصفحك لبدء استخدام النظام.
2. استخدم القائمة العلوية للتنقل بين الصفحات.
3. قم بإدخال البيانات في الصفحة الرئيسية ونقلها باستخدام الزر المخصص.
4. عرض التقارير في صفحة التقارير.
5. تحديث الإعدادات في صفحة الإعدادات.
6. عرض البيانات المرحلة في صفحة البيانات المرحلة.

## الميزات
- نقل البيانات بين الفروع.
- عرض التقارير الخاصة بالكمية وتكلفة الشراء لكل صنف.
- إدارة إعدادات النظام وسحب رواتب العمال.
- عرض البيانات المرحلة وتحديثها.

## المتطلبات
- متصفح ويب حديث يدعم HTML5 و CSS3 و JavaScript.

## كيفية التثبيت
لا حاجة للتثبيت، فقط قم بفتح `index.html` في متصفحك.

## المساهمة
مرحبًا بالمساهمات! يمكنك فتح تذاكر جديدة، أو إرسال طلبات السحب (Pull Requests) على مستودع GitHub.

## الترخيص
هذا المشروع مرخص بموجب ترخيص MIT. راجع ملف `LICENSE` لمزيد من التفاصيل.
"""

# Write the README.md file to the project directory
readme_file_path = f"{project_dir}/README.md"
with open(readme_file_path, "w") as file:
    file.write(readme_content)

# Create a zip file of the project directory
zip_file_path = "/mnt/data/my-awesome-project.zip"
with zipfile.ZipFile(zip_file_path, "w") as zipf:
    for root, dirs, files in os.walk(project_dir):
        for file in files:
            zipf.write(os.path.join(root, file), os.path.relpath(os.path.join(root, file), project_dir))

zip_file_path
