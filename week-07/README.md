# WEB-425 Angular with TypeScript

Bellevue University | Web Development [Degree](http://www.bellevue.edu/degrees/bachelor/web-development-bs "Designed by developers for developers.")

## Contributors

- Richard Krasso
- David Rachwalik

### Week 07 Commands

Generate a new Angular application ([RxJS](https://www.learnrxjs.io))

```bash
ng new <project-name> --strict
```

Install Angular Material ("Deep Purple/Amber" theme, 'y' typography, 'y' animations)

```bash
ng add @angular/material
```

Install [Angular Flex-Layout](https://github.com/angular/flex-layout) ([v10](https://www.npmjs.com/package/@angular/flex-layout/v/10.0.0-beta.32))

```bash
npm i @angular/flex-layout@10.0.0-beta.32
```

Install [NGX Cookie Service](https://www.npmjs.com/package/ngx-cookie-service) ([v12.0.3](https://www.npmjs.com/package/ngx-cookie-service/v/12.0.3))

```bash
npm i ngx-cookie-service@12.0.3
```

---

Add [jQuery](https://jquery.com), [Bootstrap 4](https://getbootstrap.com/docs/4.6), [Bootstrap Icons](https://icons.getbootstrap.com)

- _reminder_: add to `angular.json` file in 'build.options.styles' and 'build.options.scripts'

```bash
npm i jquery bootstrap@4.6.1 bootstrap-icons
```

Generate a new Angular component

```bash
ng g c <component-name>
```

Generate a new Angular guard

```bash
ng g g <component-name>
```
